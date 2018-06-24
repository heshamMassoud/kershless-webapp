import PersonItem from './PersonItem'
export default ({ data }) => (
  <section>
    {data.map((item, i) => <PersonItem key={i} item={item}/> )}
  </section>
)