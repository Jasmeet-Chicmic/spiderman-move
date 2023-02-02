import { _decorator, Component, Node, UITransform, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("mana")
export class mana extends Component {
  start() {}




  moveLeft() {
    let pos: Vec3 = this.node.getPosition();
    let parent = this.node.parent.getComponent(UITransform).width;
    let charSize = this.node.getComponent(UITransform).contentSize.width;
    let stopLeft = -1 * (parent / 2) + (charSize/2);
    if (pos.x > stopLeft) pos.x = pos.x - 10;
    this.node.setPosition(pos);
  }
  moveRight() {
    let pos: Vec3 = this.node.getPosition();
    let parent = this.node.parent.getComponent(UITransform).width;
    let charSize = this.node.getComponent(UITransform).contentSize.width;
    let stopLeft = parent / 2 - (charSize/2);
    if (pos.x < stopLeft) pos.x = pos.x + 10;
    this.node.setPosition(pos);
  }
  moveUp() {
    let pos: Vec3 = this.node.getPosition();
    let parent = this.node.parent.getComponent(UITransform).height;
    let charSize = this.node.getComponent(UITransform).contentSize.height;
    let stopLeft = parent / 2 - (charSize/2);

    if (pos.y < stopLeft) pos.y = pos.y + 10;
    this.node.setPosition(pos);
  }
  moveDown() {
    let pos: Vec3 = this.node.getPosition();
    let parent = this.node.parent.getComponent(UITransform).height;
    let charSize = this.node.getComponent(UITransform).contentSize.height;
    let stopLeft = -1 * (parent / 2) + (charSize/2);

    if (pos.y > stopLeft) pos.y = pos.y - 10;
    this.node.setPosition(pos);
  }

  update(deltaTime: number) {}
}
