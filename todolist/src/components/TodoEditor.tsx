import Button from "./html/Button";
import Input from "./html/Input";

const TodoEditor = () => {
  return (
    <>
      {/* 등록 */}
      <form action="" className="grid gap-4">
        <div className="flex gap-2">
          <Input type="text" placeholder="Enter Todo List" />
          <Button
            type="submit"
            className="bg-[#4F4F4F] text-white w-[77px] shrink-0 rounded-lg"
          >
            Add
          </Button>
        </div>
      </form>
    </>
  );
};
export default TodoEditor;
