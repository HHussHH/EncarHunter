import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux';
import {AppDispatch, RootState} from "@/app/store/store.ts";

// Создаем типизированную версию useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
