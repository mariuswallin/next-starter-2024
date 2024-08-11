type DummyProps = {
  id: string
  name?: string
  onClickHandler?: () => void
}
export default function Dummy(params: Readonly<DummyProps>) {
  const { id, name, onClickHandler } = params
  return (
    <article>
      <h2>{id}</h2>
      {name ? <p>{name}</p> : null}
      {onClickHandler ? (
        <button type="button" onClick={onClickHandler}>
          Knapp
        </button>
      ) : null}
    </article>
  )
}
