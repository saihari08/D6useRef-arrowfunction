import React,{useRef}from "react";

function BtechForm() {
     
    let FirstNameInputRef=useRef();
    let LastNameInputRef=useRef();
    let ThermalEngineeringInputRef=useRef();
    let Machinedesign1InputRef=useRef();
    let FluidMechanicsInputRef=useRef();
    let MachineDrawingInputRef=useRef();
    let ThermodynamicsInputRef=useRef();
    let IcEngineInputRef=useRef();


    
  return (
<div>
    <form className="BtechForm">
    <fieldset> 
    <legend>Marks sheet</legend>
        <div>
            <label>FirstName</label>
            <input ref={FirstNameInputRef} type="text"></input>
        </div>

        <div>
            <label>LastName</label>
            <input ref={LastNameInputRef} type="text"></input>
        </div>

        <div>
            <label>ThermalEngineering</label>
            <input ref={ThermalEngineeringInputRef} type="number"></input>
        </div>

        <div>
            <label>MachineDesign-I</label>
            <input ref={Machinedesign1InputRef} type="number"></input>
        </div>

        <div>
            <label>FluidMechanics</label>
            <input ref={FluidMechanicsInputRef} type="number"></input>
        </div>

        <div>
            <label>MachineDrawing</label>
            <input ref={MachineDrawingInputRef} type="number"></input>
        </div>

        <div>
            <label>Thermodynamics</label>
            <input ref={ThermodynamicsInputRef} type="number"></input>
        </div>

        <div>
            <label>IcEngine</label>
            <input ref={IcEngineInputRef} type="number"></input>
        </div>
        </fieldset>
        <div>
        <button type="button" onClick={()=>{
    

         let ThermalEngineering=Number(ThermalEngineeringInputRef.current.value);
         let MachineDesignI=Number(Machinedesign1InputRef.current.value);
         let FluidMechanics=Number(FluidMechanicsInputRef.current.value);
         let MachineDrawing=Number(MachineDrawingInputRef.current.value);
         let Thermodynamics=Number(ThermodynamicsInputRef.current.value);
         let IcEngine=Number(IcEngineInputRef.current.value);
     let totalmarks=ThermalEngineering+
     MachineDesignI+FluidMechanics+MachineDrawing+Thermodynamics+IcEngine
     alert(totalmarks)
    }}>Calculate Result</button>

    </div>
    </form>
</div>
  )
}

export default BtechForm;
