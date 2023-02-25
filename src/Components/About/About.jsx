import cl from './About.module.scss';

const About = () => {
  return (
    <article id='about' className={cl.about}>
      <img className={cl.img} src='https://koshka.top/uploads/posts/2021-12/1638771511_1-koshka-top-p-milogo-kotika-v-shapochke-1.jpg' alt='author' />
      <div className={cl.content}>
        <h2>Title</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat neque corporis earum incidunt culpa quam soluta, quasi et odit.</p>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>consectetur adipisicing elit. Iust</li>
          <li>o, eius placeat!</li>
        </ul>
        <ol>
          <li>autem dicta dolorum in eum?</li>
          <li>Beatae dolore eum fuga repellendus quia quisquam veniam unde suscipit!</li>
        </ol>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloremque recusandae vel, fugit animi odit maiores quibusdam facilis eos! Quidem laboriosam ipsam laudantium corrupti tempore ipsum, totam consequuntur omnis tempora.</p>
      </div>
    </article>
  );
}

export default About;