export type IPages = "login" | "register" | "forgot"

export interface ISharedProps {
    onChange: (n: IPages) => any 
}