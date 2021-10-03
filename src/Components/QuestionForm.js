function QuestionForm() {
  function HandelSubmit(e) {
      e.preventDefault()
    console.log(e.target["MyInput"].value);
  }
  return (
    <form onSubmit={(e) => HandelSubmit(e)}>
      <input type="text" name="MyInput" defaultValue="taper votre text" />
      <button type="submit">Entrer</button>
    </form>
  );
}
export default QuestionForm;
