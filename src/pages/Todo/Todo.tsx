import * as React from 'react';
import { bindActionCreators, Dispatch } from "redux";
import todo from "../../modules/todo/todo";
import { connect } from "react-redux";

interface ITodo {
  action: typeof todo.actions;
  todos: ITodo[];
}

/*let deferredPrompt;



btnAdd.addEventListener('click', (e) => {
  // hide our user interface that shows our A2HS button
  btnAdd.style.display = 'none';
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
});

window.addEventListener('appinstalled', (evt) => {
  app.logEvent('a2hs', 'installed');
});*/


class Todo extends React.Component<ITodo> {

  state = {
    deferredPrompt: null,
    displayAddDesktopButton: false,
    time: 0,
  };

  componentWillMount(): void {
    window.addEventListener('beforeinstallprompt', (e: any) => {

      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();

      // Show the prompt
      e.prompt();

      e.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
        });
    });

    setInterval(() => this.setState({time: this.state.time+1}), 1000);
  }

  render() {
    const { action, todos } = this.props;

    return (
      <div>
        <h3>{todos.length}</h3>
        <button onClick={() => action.addTodo()}>Add todo</button>

        <h2>{this.state.time} sec</h2>
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
