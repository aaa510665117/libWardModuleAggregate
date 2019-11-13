//
//  TimeSelectView.h
//  MobileDoctor
//
//  Created by 徐然 on 2017/9/1.
//  Copyright © 2017年 Ran. All rights reserved.
//

#import "BaseView.h"

@protocol TimeSelectViewDelegate <NSObject>

-(void)selectedStartTimeWithButton:(UIButton *)button andDate:(NSDate *)selectedDate;
-(void)selectedEndTimeWithButton:(UIButton *)button andDate:(NSDate *)selectedDate;

@end

@interface TimeSelectView : BaseView

@property (nonatomic,weak) id<TimeSelectViewDelegate> delegate;
@property (nonatomic,strong) UIButton * startButton;
@property (nonatomic,strong) UIButton * endButton;
@property (nonatomic,copy) NSString * selecedStartDate;
@property (nonatomic,copy) NSString * selecedEndDate;

@end
