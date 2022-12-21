import Header from "../components/Header";
import { gql, useQuery } from "@apollo/client";

import { ProjectsTemplate } from "../template/projects";
import client from "../service/apollo/apollo-client";

const Projects = () => {
  return (
    <>
      {/* {console.log(data)} */}
      <Header />
      <ProjectsTemplate />
    </>
  );
};

export default Projects;

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//       query Stacks {
//         stacks {
//           title
//           stacks {
//             image {
//               url
//             }
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
