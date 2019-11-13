//
//  RSDatePickerController.h
//  DatePickDemo
//
//  Created by winning on 2018/4/23.
//  Copyright © 2018年 winning. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "RSDatePickView.h"

@protocol RSDatePickerDelegate <NSObject>

- (void)complishSelect:(NSDate *)selectDate;

@end

@interface RSDatePickerController : UIViewController

/**
 *  年-月-日-时-分 文字颜色(默认橙色)
 */
@property (nonatomic,strong)UIColor *dateLabelColor;
/**
 *  滚轮日期颜色(默认黑色)
 */
@property (nonatomic,strong)UIColor *datePickerColor;

/**
 *  限制最大时间（默认2099）datePicker大于最大日期则滚动回最大限制日期
 */
@property (nonatomic, retain) NSDate *maxLimitDate;
/**
 *  限制最小时间（默认0） datePicker小于最小日期则滚动回最小限制日期
 */
@property (nonatomic, retain) NSDate *minLimitDate;

/**
 *  大号年份字体颜色(默认灰色)想隐藏可以设置为clearColor
 */
@property (nonatomic, retain) UIColor *yearLabelColor;

@property (nonatomic, retain) NSDate *scrollToDate;//滚到指定日期

@property (nonatomic,assign) id<RSDatePickerDelegate> delegate;

@end
