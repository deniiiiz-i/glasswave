"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  NativeSelect,
} from "glasswave";
import { CreditCard } from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";

export function FieldPreview() {
  return (
    <ComponentPreview label="Field">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Payment method</CardTitle>
          <CardDescription>Add a new card to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="card-name">Name on card</FieldLabel>
              <Input
                id="card-name"
                placeholder="Evil Rabbit"
                autoComplete="cc-name"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="card-number">Card number</FieldLabel>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <CreditCard className="size-4 text-current/50" />
                </InputGroupAddon>
                <InputGroupInput
                  id="card-number"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="1234 5678 9012 3456"
                />
              </InputGroup>
              <FieldDescription>
                Enter your 16-digit card number
              </FieldDescription>
            </Field>

            <div className="grid grid-cols-3 gap-4">
              <Field>
                <FieldLabel htmlFor="card-month">Month</FieldLabel>
                <NativeSelect
                  id="card-month"
                  autoComplete="cc-exp-month"
                  defaultValue=""
                  className="text-sm"
                >
                  <option value="" disabled>
                    MM
                  </option>
                  {Array.from({ length: 12 }, (_, i) => {
                    const m = String(i + 1).padStart(2, "0");
                    return (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    );
                  })}
                </NativeSelect>
              </Field>
              <Field>
                <FieldLabel htmlFor="card-year">Year</FieldLabel>
                <NativeSelect
                  id="card-year"
                  autoComplete="cc-exp-year"
                  defaultValue=""
                  className="text-sm"
                >
                  <option value="" disabled>
                    YYYY
                  </option>
                  {Array.from({ length: 9 }, (_, i) => {
                    const y = 2026 + i;
                    return (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    );
                  })}
                </NativeSelect>
              </Field>
              <Field>
                <FieldLabel htmlFor="card-cvc">CVC</FieldLabel>
                <Input
                  id="card-cvc"
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  placeholder="CVC"
                />
              </Field>
            </div>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Add card</Button>
        </CardFooter>
      </Card>
    </ComponentPreview>
  );
}
