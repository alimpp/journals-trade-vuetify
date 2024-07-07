import { JsonParser } from "@/utils/string";

export const GetJournalsLengths = () => {
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

  return {
    total: totalLength,
    stop: stopLength,
    target: targetLength,
    complete: completedLength,
    inPosition: inPositionLength,
    orderInQueue: orderInQueueLength,
    fullTarget: fullTarget,
  };
};
