import { useState, useEffect } from 'react';
import * as Prismic from '@prismicio/client';

import { Banner } from '../../components/Banner';
import { Benefits } from '../../components/Benefits';
import { Contact } from '../../components/Contact';
import { Graphics } from '../../components/Graphics';
import { Header } from '../../components/Header';
//import { Footer } from '../../components/Footer';
interface Benefits{
  id: string;
  title: string;
  description: string;
  subtitle: string;
  subdescription: string;
}

const endpoint = Prismic.getRepositoryEndpoint('gpaengenharia');
const client = Prismic.createClient(endpoint);

export const Home: React.FC = () => {
 const [benefits, setBenefits] = useState<Benefits[]>([]);

  useEffect(() =>{
    async function fetchData (){
      const results = await client.getAllByType('benefits');

       
      const resultsFormatted = results.map(item => {
        return{
          id: item.id,
          title: item.data.title[0].text,
          description: item.data.description[0].text,
          subtitle: item.data.subtitle[0].text,
          subdescription: item.data.subdescription[0].text
        }
      });
      setBenefits(resultsFormatted);
    }

    fetchData();
  }, [])

  return (
    <>
      <Header />
      <Banner />
      {benefits.filter(x => x.title == "Gastos extras").map(benefits => (
        <Benefits key={benefits.id} 
                  id= {benefits.id}
                  title={benefits.title}
                  description={benefits.description}  
                  subtitle = {benefits.subtitle}
                  subdescription = {benefits.subdescription}
                  />
      ))}
      {benefits.filter(x => x.title == "Taxa Selic").map(benefits => (
      <Graphics key={benefits.id} 
                id= {benefits.id}
                title={benefits.title}
                description={benefits.description}  
                subdescription = {benefits.subdescription}/>
      ))}
      <Contact />
    </>
  );
};
