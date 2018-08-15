// VALIDATION IN INDIVIDUALLY FIELDS
// import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
// import { Directive,Input } from '@angular/core';

// @Directive({
//     selector: '[appConfirmEqualValidator]',
//     providers:[{
//         provide: NG_VALIDATORS,
//         useExisting: ConfirmEqualValidatorDirective,
//         multi: true
//     }]
// })
// export class ConfirmEqualValidatorDirective implements Validator{
//     @Input() appConfirmEqualValidator:string
//     validate(control:AbstractControl): {[key:string]:any} | null {
//         const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
//         //here confirmPassword field is given by control, control.parent goes for root form element and
//         // its get method gives the password field using the directive mentioned
//         if (controlToCompare && controlToCompare.value !== control.value){
//             return { 'notEqual': true};
//         }
//         return null; // if matched return null

//     }
// }
// VALIDATION IN FORM GROUP
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})
export class ConfirmEqualValidatorDirective implements Validator{
    validate(passwordGroup:AbstractControl): {[key:string]:any} | null {
        const passwordField = passwordGroup.get('password'); //name of the pwd field given in template
        const confirmPasswordField = passwordGroup.get('confirmPassword');    //name of the cpwd field given in template    
        if (passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value){
            return { 'notEqual': true};
        }
        return null; // if matched return null

    }
}