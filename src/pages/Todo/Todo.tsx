import * as React from 'react';
import { bindActionCreators, Dispatch } from "redux";
import todo from "../../modules/todo/todo";
import { connect } from "react-redux";

interface ITodo {
  action: typeof todo.actions;
  todos: ITodo[];
}

class Todo extends React.Component<ITodo> {

  render() {

    const { action, todos } = this.props;

    return (
      <div>
        <h3>{todos.length}</h3>
        <button onClick={() => action.addTodo()}>Add todo</button>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  todos: todo.selector.getTodos(state)
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  action: bindActionCreators(
    {
      ...todo.actions
    },
    dispatch,
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
