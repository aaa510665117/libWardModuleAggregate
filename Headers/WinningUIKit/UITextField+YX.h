//
//  UITextField+YX.h
//  
//
//  Created by winning on 2017/3/28.
//
//

#import <UIKit/UIKit.h>

@protocol YXTextFieldDelegate <UITextFieldDelegate>
@optional
- (void)textFieldDidDeleteBackward:(UITextField *)textField;
@end

@interface UITextField (YX)

@property (weak, nonatomic) id<YXTextFieldDelegate> delegate;

@end

/**
 *  监听删除按钮
 *  object:UITextField
 */
extern NSString * const YXTextFieldDidDeleteBackwardNotification;
