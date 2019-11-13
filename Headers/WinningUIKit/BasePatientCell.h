//
//  BasePatientCell.h
//  MobileDoctor
//
//  Created by 徐然 on 2017/8/16.
//  Copyright © 2017年 Ran. All rights reserved.
//

//************************医院事务类病人列表 cell 基类************************
//以手术页面为基准,子类根据手术 cell 调整布局
#import "BaseTableViewCell.h"
#import "XXTool.h"

@interface BasePatientCell : BaseTableViewCell

//*****************子类自定义 model   并重写 set 方法***************

//控件
@property (nonatomic,strong) UILabel  * bedLabel;
@property (nonatomic,strong) UILabel  * nameLabel;
@property (nonatomic,strong) UILabel  * ageLabel;
@property (nonatomic,strong) UILabel  * deptLabel;
@property (nonatomic,strong) UILabel  * areaLabel;
@property (nonatomic,strong) UILabel  * statusLabel;
@property (nonatomic,strong) UILabel  * operationLabel;
@property (nonatomic,strong) UILabel  * timeLabel;
@property (nonatomic,strong) UILabel  *levelLabel;

-(void)changeLabelTextColorWithTitle:(NSString *)title andLabel:(UILabel *)label;

@end
