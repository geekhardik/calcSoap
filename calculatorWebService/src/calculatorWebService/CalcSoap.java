package calculatorWebService;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;

@WebService(name = "SoapCalculator", targetNamespace = "http://localhost:8080/WebServices/services")
@SOAPBinding(style = SOAPBinding.Style.RPC, use = SOAPBinding.Use.LITERAL, parameterStyle = SOAPBinding.ParameterStyle.WRAPPED)


public class CalcSoap {
	

		@WebMethod
		public float add(float value1, float value2) {
			return (value1 + value2);
		}
		
		@WebMethod
		public float subtract(float value1, float value2) {
			return (value1 - value2);
		}
		
		@WebMethod
		public float multiply(float value1, float value2) {
			return (value1 * value2);
		}
		
		@WebMethod
		public float divide(float value1, float value2) {
			if(value2 != 0) {
				return (value1 / value2);
			} else {
				return (0);
			}
		}
		
	
}
