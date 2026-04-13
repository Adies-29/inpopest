import './App.css'
import Header from './components/header';
import Button from './components/ui/Button';
import SpeakerCard from './components/ui/SpeakerCard';
import { Collaps } from './components/ui/Collaps';
import { Card } from './components/ui/Card'



function App() {
  const speakers = [
    {
      name:"Raditya Dika",
      role:"Penulis, Komedian, Sutradara,",
      imageUrl:"https://www.qubisa.com/_next/image?url=https%3A%2F%2Fqubisastorage.blob.core.windows.net%2Ffiles%2Fprofiles%2F17060%2Fimg300%2F17060-20210317104052321.jpg&w=1920&q=75"

    },
    {
      name:"Reza Arap",
      role:"Kreator konten, Musisi (Weird Genius)",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7J6sq3JDeUJotE0TxIORoApobJEY9SFCsQ&s"

    },{
      name:"Fujianti Utami Putri",
      role:"Kreator konten",
      imageUrl:"https://riaupos.co/wp-content/uploads/2024/01/11-Fujianti-Utami-Putri.jpg"

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
      title: "IT Seminar",
      description:
      "Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi",
    },
    {
      title: "IT Talkshow",
      description:
      "Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.",
    },
    {
      title: "IT Competition",
      description:
      "Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.",
    },
    {
      title: "IT Workshop",
      description:
      "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
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
          id='cards'>
          <div className='w-full'>
            <div>
              <h1 className='text-5xl mb-6 font-semibold'>Tentang INPOPEST</h1>
              <p className='text-sm md:text base lg:text-[1.35rem]'>
                Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema <b>“Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”</b>. Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 px-3 mt-6'>
              {cardItems.map((item, index) => (
                <Card
                  key={index}
                  className='w-full flex flex-col h-full'>
                  <h3 className='text-2xl text-red-500 mb-4 font-bold'>{item.title}</h3>
                  <p>{item.description}</p>
                  <Button
                    label='Info Selengkapnya'
                    variant='primary'
                    className='mt-auto'
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id='speaker'
          className='py-24'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-3 w-full'>
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
          id='seminar'
          className='py-10 flex gap-10 justify-between items-center'
        >
          <div className='w-1/3'>
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
              alt=""
            />
          </div>
          <div className='w-2/3 flex flex-col gap-6'>
            <h1 className='text-5xl text-red-800 font-semibold'>IT Seminar</h1>
            <p className='text-sm md:text base lg:text-[1.35rem]'>
              Seminar Nasional Teknologi Informasi ini mengangkat tema <b>"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.”</b>Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
            </p>
            <div className='flex gap-3'> 
              <Button label="Daftar IT Seminar" variant="primary"/>
            </div>
          </div>
        </section>

        <section
          id='talkshow'
          className='py-10 flex gap-10 justify-between items-center'
        >
          <div className='w-2/3 flex flex-col gap-6'>
            <h1 className='text-5xl text-red-800 font-semibold'>IT Talkshow</h1>
            <p className='text-sm md:text base lg:text-[1.35rem]'>
              Talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI.
            </p>
            <div className='flex gap-3'> 
              <Button label="Daftar IT Talkshow" variant="primary"/>
            </div>
          </div>
          <div className='w-2/3'>
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
              alt=""
            />
          </div>
        </section>

        <section
          id='workshop'
          className='py-10 flex gap-10 justify-between items-center'
        >
          <div className='w-1/2'>
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
              alt=""
            />
          </div>
          <div className='w-2/3 flex flex-col gap-6'>
            <h1 className='text-5xl text-red-800 font-semibold'>IT Workshop</h1>
            <p className='text-sm md:text base lg:text-[1.35rem]'>
              Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
            </p>
            <div className='flex gap-3'> 
              <Button label="Daftar IT Workshop" variant="primary"/>
            </div>
          </div>
        </section>

        <section
          id='competition'
          className='py-10 flex gap-10 justify-between items-center'
        >
          <div className='w-2/3 flex flex-col gap-6'>
            <h1 className='text-5xl text-red-800 font-semibold'>IT Competition</h1>
            <p className='text-sm md:text base lg:text-[1.35rem]'>
              <b>"From Creation to Innovation"</b> adalah sebuah kompetisi IT yang dirancang untuk menjembatani jurang antara ide kreatif dan inovasi nyata. Ajang ini menantang para talenta digital untuk tidak hanya menciptakan sesuatu yang baru, tetapi juga mengembangkannya menjadi solusi yang berdampak, berkelanjutan, dan bernilai guna tinggi.
            </p>
            <div className='flex gap-3'> 
              <Button label="Daftar IT Competition" variant="primary"/>
            </div>
          </div>
          <div className='w-2/3'>
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
              alt=""
            />
          </div>
        </section>

        <section
          id='collapse'
        >
          <div className='w-full mx-auto'>
            <div>
              <h1 className='text-4xl font-bold flex justify-center'>Punya Pertanyaan? Lihat Disini</h1>
              <p className='flex justify-center text-gray-600 mt-5'>Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat daftar pertanyaan di bawah ini.</p>
            </div>
            <div className='py-24 grid grid-cols-1 md:grid-cols-2 gap-6 px-3 items-start'>
              {cardItems.map((item, index) => (
                <Collaps
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
