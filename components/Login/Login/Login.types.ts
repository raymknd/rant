import { ISharedProps } from "../shared.types";

export interface ILoginProps extends ISharedProps {}

export interface IQrProps {
    open: boolean;
    onClose: () => any;
}