
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TestCoordinate
 * DateTime = Tue Nov 23 2021 06:10:13 GMT+0800 (中国标准时间)
 * Author = kojavaee
 * FileBasename = TestCoordinate.ts
 * FileBasenameNoExtension = TestCoordinate
 * URL = db://assets/script/TestCoordinate.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('TestCoordinate')
export class TestCoordinate extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
        // 1: 世界(屏幕)坐标系;
        // 2: 相对(节点)坐标系，两种相对节点原点的方式(1) 左下角为原点, (2) 锚点为原点(AR)
        // 3: 节点坐标和屏幕坐标的相互转换; 我们到底使用哪个？通常情况下带AR;
        // 4: 获取在父亲节点坐标系下(AR为原点)的节点包围盒;
        // 5: 获取在世界坐标系下的节点包围盒;
        // 6: 触摸事件对象世界坐标与节点坐标的转换;
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */
