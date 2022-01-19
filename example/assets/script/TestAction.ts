
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TestAction
 * DateTime = Wed Jan 19 2022 21:49:10 GMT+0800 (中国标准时间)
 * Author = kojavaee
 * FileBasename = TestAction.ts
 * FileBasenameNoExtension = TestAction
 * URL = db://assets/script/TestAction.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('TestAction')
export class TestAction extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start() {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

