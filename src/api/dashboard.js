import { JsonParser } from "@/utils/string";

export const GetJournalsData = () => {
  const journals = localStorage.getItem("journals");
  const result = JsonParser(journals);

  const totalLength = result.length;

  const stoped = result.filter((item) => {
    return item.state == "Stop";
  });
  const stopLength = stoped.length;

  const fullTarget = result.filter((item) => {
    return item.state == "Full Target";
  });
  const targetLength = fullTarget.length;

  const completed = result.filter((item) => {
    return item.state == "Completed";
  });
  const completedLength = completed.length;

  const inPosition = result.filter((item) => {
    return item.state == "In Position";
  });
  const inPositionLength = inPosition.length;

  const orderInQueue = result.filter((item) => {
    return item.state == "Order in Queue";
  });
  const orderInQueueLength = orderInQueue.length;

  return [
    { id: "1", title: "Total Positions", value: totalLength },
    { id: "4", title: "Completed Positions", value: completedLength },
    { id: "3", title: "Target Positions", value: targetLength },
    { id: "6", title: "In Position", value: inPositionLength },
    { id: "2", title: "Stop Loss Positions", value: stopLength },
    { id: "5", title: "In Order Positions", value: orderInQueueLength },
  ];
};

export const GetFullTargetPositions = () => {
  const journals = localStorage.getItem("journals");
  const result = JsonParser(journals);
  const fullTarget = result.filter((item) => {
    return item.state == "Full Target";
  });
  return fullTarget;
};
