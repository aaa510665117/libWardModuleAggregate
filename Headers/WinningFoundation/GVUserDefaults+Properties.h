//
//  GVUserDefaults+Properties.h
//  MobileDoctor
//
//  Created by 徐然 on 2017/7/11.
//  Copyright © 2017年 Ran. All rights reserved.

//===========每个存储属性需在 . m 加 @dynamic===============

#import <GVUserDefaults/GVUserDefaults.h>

@interface GVUserDefaults (Properties)

/**
 医生代码-ysdm
 */
@property (nonatomic,copy) NSString * account;

/*
 是否登录状态
 */
@property (nonatomic,assign) BOOL isLogin;

/**
 （若开启手机注册 需要记录手机号码）
 登录手机号码
 */
@property (nonatomic,copy) NSString * phoneNumber;

/**
 登录密码
 */
@property (nonatomic,copy) NSString * password;

/**
 登录返回的 data
 */
@property (nonatomic,strong) id  data;

/**
 已选择的科室
 */
@property (nonatomic,copy) NSString * dept;

/**
 已选择的病区
 */
@property (nonatomic,copy) NSString * ward;

/**
 已选择病区代码
 */
@property (nonatomic,copy) NSString * bqdm;

/**
 已选择科室代码
 */
@property (nonatomic,copy) NSString * ksdm;

/**
 已选择科室的位置 (格式:section/row : 3/7)
 */
@property (nonatomic,copy) NSString * lastDeptIndexPath;

/**
  服务IP
 */
@property (nonatomic,copy) NSString * ip;

/**
 服务端口
 */
@property (nonatomic,copy) NSString * port;

/**
 医生姓名
 */
@property (nonatomic,copy) NSString *name;

/**
 医生的科室代码
 */
@property (nonatomic,copy) NSString * ysksdm;

/**
 医生的病区代码
 */
@property (nonatomic,copy) NSString * ysbqdm;

/**
 上次版本
 */
@property (nonatomic,copy) NSString * lastVersion;

/**
 上次登录的工号
 */
@property (nonatomic,copy) NSString * lastLoginAccount;

/**
 所在医院名称
 */
@property (nonatomic,copy) NSString * hospital;

/**
 使用语音运营商
 1 百度
 2 讯飞
 3 云之声
 */
@property (nonatomic,copy) NSString * speechType;

/**
 1.卫宁html 2.三方html 3.pdf 4.纯三方web 5，5.0和5.5混合  6，5.5病历
 */
@property (nonatomic,copy) NSString * EMR01;

/**
 护理 呼吸x轴 时间天数
 */
@property (nonatomic,weak) NSString  *NMR06;

/**
 医疗行为分析地址
 */
@property (nonatomic,copy) NSString * medicalBehaviorHost;

/**
 是否显示注册按钮
 */
@property (nonatomic,assign) BOOL isRegist;
/**
 是否有设备审批权限
 */
@property (nonatomic,assign) BOOL isApproval;

/**
 是否首次安装
 */
@property (nonatomic,assign) BOOL isFirstStart;

@end
