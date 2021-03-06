import * as React from 'react';
import { bindActionCreators, Dispatch } from "redux";
import todo from "../../modules/todo/todo";
import { connect } from "react-redux";
import AddTodo from "@Pages/Todo/_AddTodo";
import { TODO_STATUS } from "../../modules/todo/constant";
import { TodoItem } from "../../modules/todo/model";
import form from "../../modules/form/form";
import { FORM_NAME } from "../../modules/form/constant";
import CardItem from "@Components/CardItem";
import Line from "@Components/Line";
import axios from "axios";
import { get } from 'lodash';


interface ITodo {
  action: typeof todo.actions & typeof form.actions;
  todos: TodoItem[];
  formValues: any;
}

class Todo extends React.Component<ITodo> {

  componentWillMount(): void {
    const { action } = this.props;

    axios.get('http://localhost:3000/todos')
      .then((response: any) => {
        action.setTodos(response.data)
      }).catch((error: any) => {
        console.log(error);
    });
  }

  componentDidMount(): void {
    setInterval(() => {
      const { action, todos } = this.props;
      const toSynchronize = [];

      todos.forEach((todo: TodoItem) => {
        if (!todo.id) toSynchronize.push(todo)
      });

      toSynchronize.length > 0 && action.synchronize(toSynchronize);
    }, 10000);
  }

  handleSubmitTodo(e: any) {
    const { action, formValues } = this.props;
    const value = formValues[FORM_NAME.ADD_TODO];

    e.preventDefault();

    if(!!value) {
      action.addTodo({
        value: formValues[FORM_NAME.ADD_TODO],
        status: TODO_STATUS.TODO
      });
      action.clearForm(FORM_NAME.ADD_TODO);
    }
  }

  handleChangeTodo(e: any) {
    const { action } = this.props;

    action.setForm({
      name: FORM_NAME.ADD_TODO,
      value: e.target.value
    });
  }

  render() {
    const { formValues, todos } = this.props;

    return (
      <div>
        <AddTodo
          onSubmit={(e) => this.handleSubmitTodo(e)}
          onChange={(e) => this.handleChangeTodo(e)}
          value={formValues[FORM_NAME.ADD_TODO]}
        />

        <Line />

        {todos.map((todo: TodoItem, index: number) =>
          <CardItem key={index} text={todo.value} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: todo.selector.getTodos(state),
  formValues: form.selector.getFormValues(state)
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  action: bindActionCreators(
    {
      ...todo.actions,
      ...form.actions,
    },
    dispatch,
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
