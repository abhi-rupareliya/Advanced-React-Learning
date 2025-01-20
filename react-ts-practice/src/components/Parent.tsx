type ParentProps = {
  children: React.ReactNode;
};

function Parent(props: ParentProps) {
  return (
    <div>
      <p>Parent Component</p>
      {props.children}
    </div>
  );
}

export default Parent;
