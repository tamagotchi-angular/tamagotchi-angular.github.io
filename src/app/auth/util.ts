import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
        return null
    }

    if(!/.{6,}@gmail\.(bg|com)/.test(value)){
        return {
            email: true,
        }
    }
    return null;
}

export function passwordMatch(passwordFormControl: AbstractControl){
    const validatorFn: ValidatorFn = (rePassFormControl: AbstractControl) => {
        if(passwordFormControl.value != rePassFormControl.value){
            return {
                passwordMissmatch: true
            }
        }
        return null;
    }
    return validatorFn;
}