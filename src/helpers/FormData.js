export function formingFormData(selectedPosition, name, email, phone, file) {
    const formData = new FormData();
    formData.append('position_id', Number(selectedPosition));
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', file)

    return formData;
}