// import React from 'react';
// import { useEffect } from 'react';
// import BingMapsReact from 'bingmaps-react'

// function InlineStyleComponent(props) {



//     useEffect(() => {
//         const scriptTag = document.createElement('script');
//         const mapElement = document.getElementById('#myMap')
//         scriptTag.src = 'http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=Ai0Xpx5Q7OjkahP5SvkQXU_7RbKxnsjwr7uguMI4UDBXoioYTfERREvHKS7brxbt';
//         scriptTag.async = true;
//         scriptTag.type = 'text/javascript'
//         scriptTag.setAttribute('test', 'value')

//         document.body.appendChild(scriptTag);
//         return () => {
//             document.body.removeChild(scriptTag);
//         }
//     }, []);

//     const styles = {
//         width: 600,
//         height: 400,
//     }


//     return (
//         <div>
//             <BingMapsReact
//               bingMapsKey='Ai0Xpx5Q7OjkahP5SvkQXU_7RbKxnsjwr7uguMI4UDBXoioYTfERREvHKS7brxbt'
//               height="500px"
//               mapOptions={{
//                 navigationBarMode: 'square',
//               }}
//               width="500px"
//               viewOptions={{
//                 center: { latitude: props.coords[0], longitude: props.coords[1] },
//                 zoom: 11,
//                 labelOverlay: 'visible',
//               }}
//             /> 
//         </div>
//     );
// }

// export default InlineStyleComponent;