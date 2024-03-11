import Modal from "../modal/modal";
import classes from "./pixModal.module.css";

import { useState } from "react";
import InitialStep from "./steps/initialStep";
import EnterValueStep from "./steps/enterValueStep";
import EnterDestinationStep from "./steps/enterDestinationStep";
import { fetchResponseAuthorized } from "@/services/serviceUtils";
import useAuth from "@/lib/auth/useAuth";

type Step = "initial" | "enterValue" | "enterDestination" | "success" | "error";

export default function PixModal() {
  const [step, setStep] = useState<Step>("initial");
  const [value, setValue] = useState(0);
  const [destination, setDestination] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const auth = useAuth();
  const { authState } = auth;
  const { user } = authState || {};
  const { cpf: userCpf } = user || {};

  const handleChangeStep = (newStep: Step) => {
    setStep(newStep);
  };

  const handleValueEntered = (v: number) => {
    setValue(v);
    setStep("enterDestination");
  };

  const handleDestinationEntered = async (dest: string) => {
    setDestination(dest);

    const { data, error } = await fetchResponseAuthorized(
      "transfer/create",
      auth,
      {
        method: "POST",
        body: JSON.stringify({
          originCpf: userCpf,
          destinationCpf: dest,
          value: value,
        }),
      }
    );

    if (error) {
      setErrorMessage(error?.message.toString() || "An error occurred");
      setStep("error");
      return;
    }

    setStep("success");
  };

  return (
    <Modal>
      {step === "initial" && (
        <>
          <h2 className={classes.title}>Área Pix</h2>
          <InitialStep onChangeStep={handleChangeStep} />
        </>
      )}
      {step === "enterValue" && (
        <>
          <h2 className={classes.title}>Qual é o valor da transferência?</h2>
          <EnterValueStep onValueEntered={handleValueEntered} />
        </>
      )}
      {step === "enterDestination" && (
        <>
          <h2 className={classes.title}>
            Para quem você quer transferir R${value}?
          </h2>
          <EnterDestinationStep
            onDestinationEntered={handleDestinationEntered}
          />
        </>
      )}

      {step === "success" && (
        <h2 className={classes.title}>
          Transferencia de R${value} realizada para o cpf {destination}
        </h2>
      )}

      {step === "error" && <h2 className={classes.title}>{errorMessage}</h2>}
    </Modal>
  );
}
