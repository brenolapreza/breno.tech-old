import Image from "next/image";
import { StackProps, StacksItemsProps } from "../../pages/stacks";
import { CardStack } from "./styles";

type StacksTemplateProps = {
  stack: StackProps;
};

export function StacksTemplate({ stack }: StacksTemplateProps) {
  return (
    <>
      <div className="container">
        {stack.title}
        <div>
          {stack.stacks.map((item, i) => (
            <CardStack key={i}>
              <Image src={item.image.url} width={80} height={80} alt="é" />
            </CardStack>
          ))}
        </div>
      </div>
    </>
  );
}
