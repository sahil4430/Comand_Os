function extractquery(input) {
  // dummy logic — replace with your real implementation
  return input.toLowerCase().replace("create meet at", "").trim();
}

export function Interpretcommand(input) {
    const lowerInput = input.toLowerCase();
    if(lowerInput.includes('open')|| lowerInput.includes('go')||lowerInput.includes('launch')) {
        return {action :'search' ,query :extractquery(input)
        
        }
    }
    if(lowerInput.includes('Volume')|| lowerInput.includes('voice')||lowerInput.includes('noise')) {
        return {action :'volume' ,query :extractquery(input)
        
        }
    }
      return {action :'unknown'}  
}
// module.exports ={Interpretcommand};
export default Interpretcommand;