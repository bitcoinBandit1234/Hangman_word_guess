const Head = ()=>{
    return(
        <div style={{
            width:"50px",
            height: "50px",
            borderRadius: "100%",
            border: "10px solid black",
            position: "absolute",
            top:"50px",
            right:"-30px"
        }}>

        </div>
    )
}

const Body = ()=>{
    return(
        <div style={{
            width:"10px",
            height: "100px",
            background:"black",
            position: "absolute",
            top:"120px",
            right:"0"
        }}>
        </div>
    )
}

const Right_Arm = ()=>{
    return(
        <div style={{
            width:"100px",
            height: "10px",
            background:"black",
            position: "absolute",
            top:"150px",
            right:"-100px",
            rotate:"-30deg",
            transformOrigin:"left bottom"
        }}>
        </div>
    )
}

const Left_Arm = ()=>{
    return(
        <div style={{
            width:"100px",
            height: "10px",
            background:"black",
            position: "absolute",
            top:"150px",
            right:"10px",
            rotate:"30deg",
            transformOrigin:"right bottom"
        }}>
        </div>
    )
}

const Right_Leg = ()=>{
    return(
        <div style={{
            width:"100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top:"210px",
            right:"-90px",
            rotate:"60deg",
            transformOrigin:"left bottom"
        }}>
        </div>
    )
}

const Left_Leg = ()=>{
    return(
        <div style={{
            width:"100px",
            height: "10px",
            background:"black",
            position: "absolute",
            top:"210px",
            right:"0",
            rotate:"-60deg",
            transformOrigin:"right bottom"
        }}>
        </div>
    )
}

export function Drawing(){
    return(
        <div style={{position: "relative"}}>
            <Head/>
            <Body/>
            <Left_Arm/>
            <Right_Arm/>
            <Right_Leg/>
            <Left_Leg/>
            <div style={{height: "10px", width: "250px", background:"black", marginLeft:"120px"}}/>
            <div style={{height: "50px", width: "10px", background:"black", position:"absolute", top:0, right:0}}/>
            <div style={{height: "400px", width: "10px", background:"black", marginLeft:"120px"}}/>
            <div style={{height: "10px", width: "250px", background:"black"}}/>
        </div>
    );
}