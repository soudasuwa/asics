'use client'

import type { asicminervalue } from "@prisma/client"

import { Tr, Td } from "@chakra-ui/react"
import { getColor } from "./colors"

export interface Props {
	electricity: number
	price: number
	model: asicminervalue
}

export default function AsicsRow({ electricity, price, model: { producer, model, profit } }: Props) {
	const roi = price / (profit / 100)

	return <Tr>
		<Td>{producer}</Td>
		<Td>{model}</Td>
		<Td isNumeric color={getColor(profit / 100)}>{(profit / 100).toFixed(2)} €</Td>
		<Td textAlign={'right'}>{price.toFixed(2)} €</Td>
		<Td textAlign={'right'}>{roi.toFixed(0)} days</Td>
	</Tr>
}