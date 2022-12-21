import { gql } from "@apollo/client";
import Header from "../components/Header";
import client from "../service/apollo/apollo-client";
import { StacksTemplate } from "../template/stacks";

export type StacksItemsProps = {
  image: {
    url: string;
  };
};

export type StackProps = {
  title: string;
  stacks: StacksItemsProps[];
};

const Stacks = (values: StackProps) => {
  return (
    <>
      <Header />
      <StacksTemplate stack={values} />
    </>
  );
};

export default Stacks;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Stacks {
        stacks {
          title
          stacks {
            image {
              url
            }
          }
        }
      }
    `,
  });

  const values = data.stacks[0];

  return {
    props: values, // will be passed to the page component as props
  };
}
