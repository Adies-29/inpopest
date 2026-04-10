import './App.css'
import Header from './components/header';
import Button from './components/ui/Button';
import SpeakerCard from './components/ui/SpeakerCard';
import { Collaps } from './components/ui/Collaps';
import { Card } from './components/ui/Card'



function App() {
  const speaker = [
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
    </>
  );
}

export default App;
