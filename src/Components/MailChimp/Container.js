import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./../ResetLessNativeModal/Form";

const Container = (props) => {
  const postUrl = `https://therideofmylife.us8.list-manage.com/subscribe/post?u=e29b02523bd9c2db56785abac&id=7511615018`;
  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default Container;
