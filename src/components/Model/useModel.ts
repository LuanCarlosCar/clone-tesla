import { useContext, useEffect, useCallback } from "react";
import modelsContext from "./modelsContext";

export default function useModel(modelName: string) {
  const { registerModel, unregisterModels, getModelByName } =
    useContext(modelsContext);
  useEffect(
    () => () => unregisterModels(modelName),
    [modelName, unregisterModels]
  );

  const getModel = useCallback(
    () => getModelByName(modelName),
    [getModelByName, modelName]
  );
  return { registerModel, getModel };
}
