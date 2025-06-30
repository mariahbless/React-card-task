import React from "react";
import { MissedGoal } from "./MissedGoal";
import { MadeGoal } from "./MadeGoal";

 export function Goal(props){
    const isGoal = props.isGoal;
    console.log(isGoal,'goal')
    if (isGoal){
        return<MadeGoal/>
    }
    return <MissedGoal/>
}