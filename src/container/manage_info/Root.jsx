import ListContainer from './ListContainer';
import ListContainerInfo from './ListContainerInfo';
import ListImageInfo from './ListImageInfo';
import ListNetwork from './ListNetwork';
import ListVolume from './ListVolume';
function Root() {
   return (
      <>
         <ListVolume /> <br />
         <ListContainer /><br />
         <ListContainerInfo /><br />
         <ListImageInfo /><br />
         <ListNetwork /><br />
      </>
   );
}

export default Root;