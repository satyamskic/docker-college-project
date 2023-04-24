import ListContainer from './ListContainer';
import ListContainerInfo from './ListContainerInfo';
import ListImageInfo from './ListImageInfo';
import ListNetwork from './ListNetwork';
import ListVolume from './ListVolume';
import './MainContainer.css';

function MainContainer(props) {
   return (
      <>

         <body>
            <div class="d-flex" id="wrapper">

               <div id="page-content-wrapper">

                  <div class="container-fluid px-4">
                     <div class="row g-3 my-2">
                        <div class="col-md-3">
                           <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                              <div>
                                 <h3 class="fs-2">720</h3>
                                 <p class="fs-5">Running</p>
                              </div>
                              <i class="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                           </div>
                        </div>

                        <div class="col-md-3">
                           <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                              <div>
                                 <h3 class="fs-2">4920</h3>
                                 <p class="fs-5">Stopped</p>
                              </div>
                              <i
                                 class="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                           </div>
                        </div>

                        <div class="col-md-3">
                           <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                              <div>
                                 <h3 class="fs-2">3899</h3>
                                 <p class="fs-5">Volumes</p>
                              </div>
                              <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                           </div>
                        </div>

                        <div class="col-md-3">
                           <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                              <div>
                                 <h3 class="fs-2">%25</h3>
                                 <p class="fs-5">Images</p>
                              </div>
                              <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                           </div>
                        </div>

                        <div class="col-md-3">
                           <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                              <div>
                                 <h3 class="fs-2">%25</h3>
                                 <p class="fs-5">Networks</p>
                              </div>
                              <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                           </div>
                        </div>
                      
                     </div>

                     <div class="row my-5">
                        <h1 class="fs-4 mb-3">List of All Running Docker Containers</h1>
                        <div class="col">
                        <ListContainerInfo apiurl={props.apiurl} />
                        </div>
                     </div>

                     <div class="row my-5">
                        <h1 class="fs-4 mb-3">List of All Running+Stopped Docker Containers</h1>
                        <div class="col">
                        <ListContainer apiurl={props.apiurl} />
                        </div>
                     </div>
                     <div class="row my-5">
                        <h1 class="fs-4 mb-3">List of All Docker Volumes</h1>
                        <div class="col">
                        <ListVolume apiurl={props.apiurl} />
                        </div>
                     </div>
                     <div class="row my-5">
                        <h1 class="fs-4 mb-3">List of All Docker Images</h1>
                        <div class="col">
                        <ListImageInfo apiurl={props.apiurl} />
                        </div>
                     </div>
                     <div class="row my-5">
                        <h1 class="fs-4 mb-3">List of All Docker Networks</h1>
                        <div class="col">
                        <ListNetwork apiurl={props.apiurl} />
                        </div>
                     </div>
                     
                  </div>
               </div>
            </div>
         </body>
      </>
   );
}

export default MainContainer;