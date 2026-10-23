import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
export default function NotFound() { return <main id="conteudo" className="not-found container"><p className="eyebrow">404 / PÁGINA NÃO ENCONTRADA</p><h1>Essa página não está aqui<span>.</span></h1><Link className="button button-primary" href="/">Voltar ao início <ArrowIcon /></Link></main>; }
