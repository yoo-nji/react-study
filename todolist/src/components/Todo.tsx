import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

export type TTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

const Todo = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  // 새로운 할 일을 추가하는 함수
  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: Date.now(), // 고유한 id를 현재 시간으로 설정
        text: text, // 입력받은 텍스트를 할 일로 설정
        isCompleted: false, // 새로운 할 일의 초기 완료 상태를 false로 설정
      },
    ]);
  };

  // 할 일의 완료 상태를 토글하는 함수
  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // 할 일을 삭제하는 함수
  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4F4F4F] bg-white border border-[#D1D1D1] rounded-lg inter ">
          <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <TodoEditor addTodo={addTodo} setTodos={setTodos} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </>
  );
};
export default Todo;
