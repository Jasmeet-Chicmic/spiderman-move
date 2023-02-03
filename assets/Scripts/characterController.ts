import { _decorator, Component, Node, UITransform, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("mana")
export class mana extends Component {
  start() {}

  moveLeft() {
    let pos: Vec3 = this.node.getPosition();
    let parent = this.node.parent.getComponent(UITransform).width;
    let charSize = this.node.getComponent(UITransform).contentSize.width*this.node.scale.x;
    let stopLeft = -1 * (parent / 2) + charSize / 2;
    if (pos.x > stopLeft) pos.x = pos.x - 20;
    this.node.setPosition(pos);
  }
  moveRight() {
    let pos: Vec3 = this.node.getPosition();
    let parent = this.node.parent.getComponent(UITransform).width;
    let charSize = this.node.getComponent(UITransform).contentSize.width * this.node.scale.x;
    let stopRight = parent / 2 - charSize / 2;
    if (pos.x < stopRight) pos.x = pos.x + 20;
    this.node.setPosition(pos);
  }
  moveUp() {
    let pos: Vec3 = this.node.getPosition();
    let parent = this.node.parent.getComponent(UITransform).height;
    let charSize = this.node.getComponent(UITransform).contentSize.height * this.node.scale.y;
    let stopUp = parent / 2 - charSize / 2;

    if (pos.y < stopUp) pos.y = pos.y + 100;
    this.node.setPosition(pos);
  }
  moveDown() {
    let pos: Vec3 = this.node.getPosition();
    let parent = this.node.parent.getComponent(UITransform).height;
    let charSize = this.node.getComponent(UITransform).contentSize.height* this.node.scale.y;
    let stopDown = -1 * (parent / 2) + charSize / 2;

    if (pos.y > stopDown) pos.y = pos.y - 10;
    this.node.setPosition(pos);
  }
  @property
  check: boolean = true;
  check2: boolean = true;
  update(deltaTime: number) {
    let pos: Vec3 = this.node.getPosition();
    let parent = this.node.parent.getComponent(UITransform).height;
    let charSize = this.node.getComponent(UITransform).contentSize.height * this.node.scale.y;
    let stopDown = -1 * (parent / 2) + charSize / 2;
    let stopUp = parent / 2 - charSize / 2;

    if (pos.y > stopDown && this.check) {
      pos.y = pos.y - 5; //*deltaTime;
      this.node.setPosition(pos);
    } else {
      this.check = false;
    }

    if (pos.y < stopUp && !this.check) {
      pos.y = pos.y + 5; //*deltaTime;
      this.node.setPosition(pos);
    } else {
      this.check = true;
    }

    // Rotating spider man
    this.node.angle += 50 * deltaTime;

    // Scalling
    // let x = this.node.scale.x;
    // let y = this.node.scale.y;
    // this.node.scale.set(x + 0.1 * deltaTime, y + 0.1 * deltaTime);


    //LEFT
  
    let parent1 = this.node.parent.getComponent(UITransform).width;
    let charSize1 = this.node.getComponent(UITransform).contentSize.width *this.node.scale.x;
    let stopLeft = -1 * (parent1 / 2) + charSize1 / 2;
    if (pos.x > stopLeft && this.check2) {pos.x = pos.x - 5;
    this.node.setPosition(pos);
    }else{
      this.check2 = false;
    }
 //RIGHT
    let stopRight = parent1 / 2 - charSize1 / 2;
    if (pos.x < stopRight && !this.check2) {pos.x = pos.x + 5;
      this.node.setPosition(pos);}
      else{
        this.check2 = true;
      }


  }
}
