import { JsonParser, ToSting } from "@/utils/string";

export const GetJournalsLengths = () => {
  const journals = localStorage.getItem("journals");
  const result = JsonParser(journals);

  const totalLengths = result.length;

  const stoped = result.filter((item) => {
    return item.state == "Stop";
  });
  const stopLengths = stoped.length;

  const fullTarget = result.filter((item) => {
    return item.state == "Full Target";
  });
  const targetLengths = fullTarget.length;


  console.log(`total lengths = ${totalLengths}`);
  console.log(`stop lengths = ${stopLengths} `);
  console.log(`target lengths = ${targetLengths}`);
  console.log(fullTarget);

};
