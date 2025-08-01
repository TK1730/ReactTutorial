import books from "../books.js"
import IfElse from "./IIFE/ForNest"
import ConditionalOperator from "./ConditionalOperator/ForNest"
import IIFE from "./IIFE/ForNest"

export default function sec2() {
    return (
        <>
            <h3>if文を使った条件分岐</h3>
            <IfElse src={books} />
            <h3>即時関数IIFE(Immediately Invoked Function Expression)を使った条件分岐</h3>
            <IIFE src={books} />
            <h3>条件演算子を使った条件分岐</h3>
            <ConditionalOperator src={books} />
        </>
    )
}