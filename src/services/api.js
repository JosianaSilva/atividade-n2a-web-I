export default function getMockAthletes(nome) {
 const athletes = [
    { id: 1, nome: 'Usain Bolt', esporte: 'Atletismo', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg/330px-Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg' },
    { id: 2, nome: 'Michael Phelps', esporte: 'Natação', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Michael_Phelps_Rio_Olympics_2016.jpg/330px-Michael_Phelps_Rio_Olympics_2016.jpg' },
    { id: 3, nome: 'Rebeca Andrade', esporte: 'Ginástica', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Rebeca_Andrade_in_2023.jpg/666px-Rebeca_Andrade_in_2023.jpg' },
    { id: 4, nome: 'Katie Ledecky', esporte: 'Natação', img:  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Katie_Ledecky_at_the_2023_Golden_Goggle_Awards_%28cropped%29.jpg/330px-Katie_Ledecky_at_the_2023_Golden_Goggle_Awards_%28cropped%29.jpg' },
    { id: 5, nome: 'Allyson Felix', esporte: 'Atletismo', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/AllysonFelixRio2016.jpg/717px-AllysonFelixRio2016.jpg' },
    ];
    
    for (let i = 0; i < athletes.length; i++) {
        if (athletes[i].nome === nome) {
            return [athletes[i]];
        }
    }

    return [];
}