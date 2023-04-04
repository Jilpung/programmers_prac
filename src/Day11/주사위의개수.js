function solution(box, n) {
  const boxes = box.map(el => Math.floor(el/n))
  return boxes[0]*boxes[1]*boxes[2]
}