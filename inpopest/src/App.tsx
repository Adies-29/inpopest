import './App.css'
import Header from './components/header';
import Button from './components/ui/Button';
import SpeakerCard from './components/ui/SpeakerCard';
import { Collaps } from './components/ui/Collaps';
import { Card } from './components/ui/Card'



function App() {
  const speakers = [
    {
      name:"Rhegard foro",
      role:"Tukang FOto",
      imageUrl:""

    },
    {
      name:"Rhegard foro",
      role:"Tukang FOto",
      imageUrl:""

    },{
      name:"Rhegard foro",
      role:"Tukang FOto",
      imageUrl:""

    },
  ];

  const collapseItem =[
    {
      title: "Apa itu InpoPest?",
      description:
      "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.",
    },
    {
      title: "Apa itu InpoPest?",
      description:
      "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.",
    },
    {
      title: "Apa itu InpoPest?",
      description:
      "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.",
    },
  ];

  const cardItems =   [
    {
      title: "Apa itu InpoPest?",
      description:
      "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.",
    },
    {
      title: "Apa itu InpoPest?",
      description:
      "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.",
    },
    {
      title: "Apa itu InpoPest?",
      description:
      "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.",
    },
  ];

  return (
    <>
    <Header/>

      <div className='max-w-7xl mx-auto'>
        <section
          id='hero'
          className='py-10 flex gap-10 justify-between items-center'
        >
          <div className='w-2/3 flex flex-col gap-6'>
            <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              alt=""
              className='w-96'
            />
            <p className='text-sm md:text base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600'>
              Invofest (Informatics Vocational Festival) adalah festival tahunan
              yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
              Indonesia dalam menghadapi era digital. Dengan mengusung tema
              <b>“Beyond Limits, Beyond Intelligence: Innovate for a Smarter
              Tomorrow ”</b>.
            </p>
            <div className='flex gap-3'> 
              <Button label="Info Selengkapnya" variant="primary"/>
              <Button label="Hubungi Panitia" variant="secondary"/>
            </div>
          </div>
          <div className='w-1/3'>
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt=""
            />
          </div>
        </section>
        <section
          id='speaker'
          className='py-24'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-3'>
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            ))}
          </div>
        </section>
        <section
          id='cards'
          className='py-24 grid grid-cols-1 md:grid-cols-2 gap-10 px-3'
        >
          {cardItems.map((item, index) => (
            <Card
              key={index}
              className='w-full'>
              <h3 className='text-2xl text-red-500 mb-4'>{item.title}</h3>
              <p>{item.description}</p>
              <Button
                label='Info Selengkapnya'
                variant='primary'
                className='mt-4'
              />
            </Card>
          ))}
        </section>
        <section
        id='collapse'
        className='py-24 flex flex-col gap-2 px-3'
        >
          {cardItems.map((item, index) => (
            <Collaps
            key={index}
            title={item.title}
            description={item.description}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
