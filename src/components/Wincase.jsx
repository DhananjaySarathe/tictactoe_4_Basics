import React, { useState } from "react";

function Wincase(props)
{
    const arr=props.game;
    const ox=props.ox;
    const winner=[['0','1','2'],['1','2','3'],['4','5','6'],['5','6','7'],['8','9','10'],['9','10','11'],['12','13','14'],['13','14','15'],['0','4','8'],['4','8','12'],['1','5','9'],['5','9','13'],['2','6','10'],['6','10','14'],['3','7','11'],['7','11','15'],['1','6','11'],['0','5','10'],['5','10','15'],['4','9','14'],['2','5','8'],['3','6','9'],['6','9','12'],['7','10','13']];
    winner.forEach(win=>{
        if(arr.includes(win[0]) && arr.includes(win[1]) && arr.includes(win[2]))
        {
            if(ox[(win[0])]===ox[(win[1])]  && ox[(win[1])]===ox[(win[2])])
            {
                let boxes=document.getElementsByClassName('boxx');
                for(let i=0;i<3;i++)
                boxes[win[i]].classList.add('winbox')
                update();
            }    
        }
    })

    function update(){
        for(let i=0;i<16;i++)
        {
            if(ox[i]==="")
            ox[i]=" ";
        }
        props.over();
    }

    return (
        <>
        <div className="container-fluid info"> 
        {/* <h1 className="rule"> Maximum 5 places can be Filled </h1> */}
        {props.help===0 && <h2>Turn for Player {props.turn==='X'?1:2} </h2>}
        {props.help===1 && <h2 className="won">Player {props.turn==='X'?2:1} Won</h2>}
        </div>
        </>
    )
}

export default Wincase;