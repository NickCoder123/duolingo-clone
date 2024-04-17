import { Button } from "~/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="flex max-w-[200px] flex-col space-y-4 p-4">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="secondaryOutline">secondary Outline</Button>
      <Button variant="danger">danger</Button>
      <Button variant="dangerOutline">danger Outline</Button>
      <Button variant="super">super</Button>
      <Button variant="superOutline">super Outline</Button>
      <Button variant="sidebar">sidebar</Button>
      <Button variant="sidebarOutline">sidebar Outline</Button>
      <Button variant="ghost">ghost</Button>
    </div>
  );
};

export default ButtonsPage;
